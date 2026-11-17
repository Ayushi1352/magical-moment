"use client";

import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import type { ContactFormData } from "@/types/templates.types";

export const ContactForm = ({
  data,
  serviceOptions,
}: {
  data?: ContactFormData;
  serviceOptions?: string[];
}) => {
  const { status, name, sending, showMessage, visibleFor, onSubmit, onInput, dismiss } = useDummySubmit();

  if (!data) return null;

  return (
    <div className="bg-[#fdfbf7] rounded-3xl p-8 sm:p-10 border border-[#dfb76c]/60 shadow-[0_10px_35px_rgba(184,134,45,0.08)] flex flex-col justify-between">
      <div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c1a2f] mb-2">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#665e52] mb-6">
          {data.description}
        </p>

        {showMessage && (
          <div className="mb-6">
            <FormSuccess
              name={name}
              title={data.successTitle}
              message={data.successMessage}
              leaving={status === "leaving"}
              visibleFor={visibleFor}
              onClose={dismiss}
            />
          </div>
        )}

        <form onSubmit={onSubmit} onInput={onInput} className="space-y-4">
          
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Maya Patel"
                className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] placeholder-[#a69d8f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] placeholder-[#a69d8f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
              />
            </div>
          </div>

          {/* Row 2: Event Type and Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                Event Type
              </label>
              <select
                name="eventType"
                defaultValue={data.eventTypes[0]}
                className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
              >
                {(serviceOptions || data.eventTypes).map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
                Estimated Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
              />
            </div>
          </div>

          {/* Row 3: Guest Count */}
          <div>
            <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
              Estimated Guest Count
            </label>
            <select
              name="guestCount"
              defaultValue={data.guestCounts[1]}
              className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all"
            >
              {data.guestCounts.map((count, idx) => (
                <option key={idx} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="block text-xs font-semibold text-[#0c1a2f] uppercase tracking-wider mb-1.5">
              Tell Us About Your Vision
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Describe your desired venue, color theme, or specific traditions..."
              className="w-full px-4 py-3 rounded-xl border border-[#dfb76c]/60 bg-white text-sm text-[#0c1a2f] placeholder-[#a69d8f] focus:outline-none focus:border-[#b8862d] focus:ring-1 focus:ring-[#b8862d] transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={sending}
            className="gold-btn w-full py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-widest text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {sending ? (
              <>
                <Spinner className="size-4" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>{data.submitButtonText}</span>
                <span className="text-base">→</span>
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
};
