"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Loader2, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";

type FormState = {
  teamName: string;
  captainName: string;
  email: string;
  contact: string;
  university: string;
  teamSize: string;
  comment: string;
  consent: boolean;
};

const initialFormState: FormState = {
  teamName: "",
  captainName: "",
  email: "",
  contact: "",
  university: "",
  teamSize: "2",
  comment: "",
  consent: false,
};

export default function RegistrationBlock() {
  const mode = process.env.NEXT_PUBLIC_REGISTRATION_MODE || "supabase";
  const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";

  const [form, setForm] = useState<FormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    if (!form.teamName.trim()) {
      setErrorMsg("Укажите название команды");
      return false;
    }
    if (!form.captainName.trim()) {
      setErrorMsg("Укажите имя капитана");
      return false;
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      setErrorMsg("Укажите корректный адрес электронной почты");
      return false;
    }
    if (!form.contact.trim()) {
      setErrorMsg("Укажите контакты (Телефон или Telegram)");
      return false;
    }
    if (!form.consent) {
      setErrorMsg("Необходимо согласие на обработку персональных данных");
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!validateForm()) return;

    if (!supabase) {
      setErrorMsg(
        "Ошибка конфигурации: Клиент Supabase не инициализирован. Проверьте переменные NEXT_PUBLIC_SUPABASE_URL и NEXT_PUBLIC_SUPABASE_ANON_KEY."
      );
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("registrations").insert({
        team_name: form.teamName,
        captain_name: form.captainName,
        email: form.email,
        contact: form.contact,
        university: form.university,
        team_size: form.teamSize,
        comment: form.comment,
      });

      if (error) {
        throw new Error(error.message);
      }

      setSuccess(true);
      setForm(initialFormState);
    } catch (err: unknown) {
      console.error("Submit error:", err);
      const message = err instanceof Error ? err.message : "Произошла неизвестная ошибка при регистрации. Пожалуйста, попробуйте позже.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registration" className="py-24 bg-brand-bg relative overflow-hidden scroll-mt-12">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-ink mb-4">
            Регистрация участников
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-ink/70">
            Зарегистрируйте свою команду для участия в Zertte Case Championship
          </p>
        </div>

        {/* Form / Google Form Container */}
        <div className="reveal bg-brand-bgAlt p-6 sm:p-12 rounded-3xl border border-brand-ink/10 shadow-xl">
          {mode === "google_form" ? (
            /* Google Form Mode */
            <div className="text-center py-10 flex flex-col items-center">
              <div className="p-4 rounded-full bg-brand-yellow/10 text-brand-yellow mb-6">
                <ExternalLink className="w-12 h-12 text-brand-teal" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-ink mb-4">
                Регистрация через Google Формы
              </h3>
              <p className="font-sans text-brand-ink/75 max-w-md mx-auto mb-8 leading-relaxed">
                Для этого запуска используется внешняя форма регистрации. Нажмите на кнопку ниже, чтобы заполнить анкету участника.
              </p>
              {googleFormUrl ? (
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-teal hover:bg-brand-tealDeep text-white font-sans font-bold rounded-xl inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Заполнить форму регистрации
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="p-4 bg-brand-coral/10 border border-brand-coral/20 rounded-xl text-brand-coral font-medium text-sm flex gap-2 items-center">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Переменная окружения NEXT_PUBLIC_GOOGLE_FORM_URL не настроена.</span>
                </div>
              )}
            </div>
          ) : (
            /* Supabase Mode */
            <div>
              {success ? (
                /* Success Message */
                <div className="text-center py-12 flex flex-col items-center animate-fade-in">
                  <div className="p-4 rounded-full bg-brand-teal/10 text-brand-teal mb-6">
                    <CheckCircle className="w-16 h-16" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-ink mb-2">
                    Заявка получена ✓
                  </h3>
                  <p className="font-sans text-brand-ink/75 max-w-md mx-auto mb-8">
                    Поздравляем с успешной регистрацией! Вся необходимая информация о старте чемпионата будет отправлена на почту капитана.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-brand-ink hover:bg-brand-teal text-white font-sans font-semibold rounded-lg transition-colors focus:outline-none"
                  >
                    Зарегистрировать другую команду
                  </button>
                </div>
              ) : (
                /* The Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 bg-brand-coral/10 border border-brand-coral/25 rounded-xl text-brand-coral font-sans text-sm font-semibold flex gap-2.5 items-start">
                      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>{errorMsg}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Team Name */}
                    <div>
                      <label htmlFor="teamName" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                        @FIELD:TEAM_NAME *
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={form.teamName}
                        onChange={handleChange}
                        placeholder="Введите название команды"
                        className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-brand-ink/30 text-brand-ink font-medium"
                        required
                      />
                    </div>

                    {/* Captain Name */}
                    <div>
                      <label htmlFor="captainName" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                        @FIELD:CAPTAIN_NAME *
                      </label>
                      <input
                        type="text"
                        id="captainName"
                        name="captainName"
                        value={form.captainName}
                        onChange={handleChange}
                        placeholder="Имя Фамилия"
                        className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-brand-ink/30 text-brand-ink font-medium"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                        @FIELD:CAPTAIN_EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-brand-ink/30 text-brand-ink font-medium"
                        required
                      />
                    </div>

                    {/* Contact (Phone/Telegram) */}
                    <div>
                      <label htmlFor="contact" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                        @FIELD:TELEGRAM_OR_PHONE *
                      </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        placeholder="@username или +7..."
                        className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-brand-ink/30 text-brand-ink font-medium"
                        required
                      />
                    </div>

                    {/* University */}
                    <div>
                      <label htmlFor="university" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                        @FIELD:UNIVERSITY
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={form.university}
                        onChange={handleChange}
                        placeholder="Название ВУЗа"
                        className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-brand-ink/30 text-brand-ink font-medium"
                      />
                    </div>

                    {/* Team Size */}
                    <div>
                      <label htmlFor="teamSize" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                        @FIELD:TEAM_SIZE
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all text-brand-ink font-medium cursor-pointer"
                      >
                        <option value="1">1 человек (Индивидуально)</option>
                        <option value="2">2 человека</option>
                        <option value="3">3 человека</option>
                        <option value="4">4 человека</option>
                      </select>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label htmlFor="comment" className="block text-xs font-mono font-bold text-brand-ink/65 uppercase tracking-wider mb-2">
                      @FIELD:COMMENT
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder="Расскажите о вашей команде, бэкграунде в биологии/программировании или задайте вопрос..."
                      rows={4}
                      className="w-full px-4.5 py-3.5 bg-brand-bg rounded-xl border border-brand-ink/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-brand-ink/30 text-brand-ink font-medium resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded text-brand-teal focus:ring-brand-teal border-brand-ink/20 cursor-pointer accent-brand-teal"
                      required
                    />
                    <label htmlFor="consent" className="font-sans text-xs sm:text-sm text-brand-ink/70 leading-relaxed cursor-pointer select-none">
                      Я согласен на обработку персональных данных и получение организационных писем касательно Zertte Case Championship. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4.5 bg-brand-teal hover:bg-brand-tealDeep text-white font-sans font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Отправка заявки...
                        </>
                      ) : (
                        "Отправить заявку на регистрацию"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
