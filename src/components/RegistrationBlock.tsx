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
        "Ошибка конфигурации: Клиент Supabase не инициализирован. Проверьте переменные NEXT_PUBLIC_SUPABASE_URL и NEXT_PUBLIC_SUPABASE_ANON_KEY в файле .env.local."
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
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[160px] pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-md border border-brand-teal/20">
            [REGISTRATION_DESK]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
            Регистрация участников
          </h2>
          <div className="w-12 h-0.5 bg-brand-teal mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-white/70">
            Зарегистрируйте себя или свою команду для участия в Zertte Case Championship
          </p>
        </div>

        {/* Form Container (Glassmorphic) */}
        <div className="reveal glass-panel p-6 sm:p-12 rounded-3xl shadow-2xl shadow-black/50">
          {mode === "google_form" ? (
            /* Google Form Mode */
            <div className="text-center py-10 flex flex-col items-center">
              <div className="p-4 rounded-full bg-brand-teal/10 text-brand-teal mb-6 border border-brand-teal/20 shadow-[0_0_20px_rgba(14,157,107,0.15)]">
                <ExternalLink className="w-12 h-12" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Регистрация через Google Формы
              </h3>
              <p className="font-sans text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
                Для этого запуска используется внешняя форма регистрации. Нажмите на кнопку ниже, чтобы перейти к анкете участника.
              </p>
              {googleFormUrl ? (
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-brand-teal to-brand-tealDeep hover:brightness-110 text-white font-sans font-bold rounded-xl inline-flex items-center gap-2.5 shadow-md shadow-brand-teal/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Заполнить форму регистрации
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="p-4 bg-brand-coral/10 border border-brand-coral/25 rounded-xl text-brand-coral font-semibold text-sm flex gap-2 items-center">
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
                  <div className="p-4 rounded-full bg-brand-teal/10 text-brand-teal mb-6 border border-brand-teal/20 shadow-[0_0_20px_rgba(14,157,107,0.15)]">
                    <CheckCircle className="w-16 h-16" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Заявка получена ✓
                  </h3>
                  <p className="font-sans text-white/75 max-w-md mx-auto mb-8">
                    Поздравляем с успешной регистрацией! Вся необходимая информация о старте чемпионата будет отправлена на почту капитана/участника.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-sans font-semibold rounded-lg transition-colors focus:outline-none cursor-pointer"
                  >
                    Зарегистрировать другого участника
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
                      <label htmlFor="teamName" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        @FIELD:TEAM_OR_SOLO_NAME *
                      </label>
                      <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={form.teamName}
                        onChange={handleChange}
                        placeholder="Название команды (или имя для соло)"
                        className="w-full px-4.5 py-3.5 bg-slate-950/40 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-white/20 text-white font-medium shadow-inner"
                        required
                      />
                    </div>

                    {/* Captain Name */}
                    <div>
                      <label htmlFor="captainName" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        @FIELD:CAPTAIN_OR_SOLO_NAME *
                      </label>
                      <input
                        type="text"
                        id="captainName"
                        name="captainName"
                        value={form.captainName}
                        onChange={handleChange}
                        placeholder="Имя Фамилия"
                        className="w-full px-4.5 py-3.5 bg-slate-950/40 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-white/20 text-white font-medium shadow-inner"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        @FIELD:CONTACT_EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full px-4.5 py-3.5 bg-slate-950/40 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-white/20 text-white font-medium shadow-inner"
                        required
                      />
                    </div>

                    {/* Contact (Phone/Telegram) */}
                    <div>
                      <label htmlFor="contact" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        @FIELD:TELEGRAM_OR_PHONE *
                      </label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={form.contact}
                        onChange={handleChange}
                        placeholder="@username или +7..."
                        className="w-full px-4.5 py-3.5 bg-slate-950/40 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-white/20 text-white font-medium shadow-inner"
                        required
                      />
                    </div>

                    {/* University / School */}
                    <div>
                      <label htmlFor="university" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        @FIELD:SCHOOL_OR_LYCEUM
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={form.university}
                        onChange={handleChange}
                        placeholder="Номер школы, лицей или гимназия"
                        className="w-full px-4.5 py-3.5 bg-slate-950/40 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-white/20 text-white font-medium shadow-inner"
                      />
                    </div>

                    {/* Team Size */}
                    <div>
                      <label htmlFor="teamSize" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                        @FIELD:TEAM_SIZE
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className="w-full px-4.5 py-3.5 bg-slate-950/60 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all text-white font-medium cursor-pointer"
                      >
                        <option value="1" className="bg-slate-900 text-white">1 человек (Индивидуально)</option>
                        <option value="2" className="bg-slate-900 text-white">2 человека</option>
                        <option value="3" className="bg-slate-900 text-white">3 человека</option>
                        <option value="4" className="bg-slate-900 text-white">4 человека</option>
                      </select>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label htmlFor="comment" className="block text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-2">
                      @FIELD:COMMENT
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder="Расскажите о вашем бэкграунде (биология, информатика, олимпиады) или задайте вопрос..."
                      rows={4}
                      className="w-full px-4.5 py-3.5 bg-slate-950/40 rounded-xl border border-white/10 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-all placeholder:text-white/20 text-white font-medium resize-none shadow-inner"
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
                      className="mt-1 w-4 h-4 rounded text-brand-teal focus:ring-brand-teal border-white/20 cursor-pointer accent-brand-teal"
                      required
                    />
                    <label htmlFor="consent" className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed cursor-pointer select-none">
                      Я согласен на обработку персональных данных и получение организационных писем касательно Zertte Case Championship. *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4.5 bg-gradient-to-r from-brand-teal to-brand-tealDeep hover:brightness-110 text-white font-sans font-bold text-base rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-teal/20 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
