"use client";

import { useState } from "react";
import type { ContactFormData } from "@/types/templates.types";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";

/** White fields with a light grey border and a gold icon in front */
const base =
  "w-full appearance-none rounded-[0.6rem] border-[0.1rem] border-[var(--color-field-border)] bg-[var(--color-white)] pl-12 pr-4 font-ui text-[1.05rem] text-[var(--color-text-black)] outline-none transition-colors placeholder:text-[var(--color-text-dark)] focus:border-[var(--color-gold)] lg:rounded-[0.75rem] lg:pl-[5rem] lg:text-[1.95rem]";
const field = `${base} h-14 lg:h-[4.63rem]`;
/** the design's icon in front of each field */
const icons = {
  name: "LuUserRound",
  email: "LuMail",
  phone: "LuPhone",
  date: "LuCalendarDays",
  eventType: "LuList",
  message: "LuMessageCircleMore",
};
const iconClass = "pointer-events-none absolute left-4 size-6 text-[var(--color-gold)] lg:left-[1.4rem] lg:size-[2.3rem]";

const Field = ({ name, type = "text", label, icon, autoComplete }: { name: string; type?: string; label: string; icon: string; autoComplete?: string }) => (
  <label className="relative flex items-center">
    <Icon name={icon} className={iconClass} strokeWidth={1.7} />
    <input name={name} type={type} required placeholder={label} aria-label={label} autoComplete={autoComplete} className={field} />
  </label>
);

/** Shows "Event Date" like the other fields and turns into a date picker when used */
const DateField = ({ name, label, icon }: { name: string; label: string; icon: string }) => {
  const [type, setType] = useState("text");

  return (
    <label className="relative flex items-center">
      <Icon name={icon} className={iconClass} strokeWidth={1.7} />
      <input
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        onFocus={(event) => {
          setType("date");
          // open the calendar straight away where the browser supports it
          requestAnimationFrame(() => event.target.showPicker?.());
        }}
        onBlur={(event) => {
          if (!event.target.value) setType("text");
        }}
        className={field}
      />
    </label>
  );
};

const SelectField = ({ name, placeholder, icon, options }: { name: string; placeholder: string; icon: string; options: string[] }) => {
  const [value, setValue] = useState("");

  return (
    <label className="relative flex items-center sm:col-span-2">
      <Icon name={icon} className={iconClass} strokeWidth={1.7} />
      <select
        name={name}
        value={value}
        required
        onChange={(event) => setValue(event.target.value)}
        aria-label={placeholder}
        className={`${field} cursor-pointer pr-12 ${value === "" ? "text-[var(--color-text-dark)]" : ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-text-black)]">
            {option}
          </option>
        ))}
      </select>
      <Icon name="LuChevronDown" className="pointer-events-none absolute right-4 size-6 text-[var(--color-text-black)] lg:right-[1.9rem] lg:size-[1.7rem]" strokeWidth={2.6} />
    </label>
  );
};

/** The "Send Us a Message" form; dummy submit with a thank-you message in place of the button */
export const ContactForm = ({ data, eventOptions }: { data?: ContactFormData; eventOptions: string[] }) => {
  const submit = useDummySubmit();
  if (!data) return null;
  const { fields } = data;

  // remounting the form (via key) after each send clears every field, including the select
  return (
    <form
      key={submit.round}
      onSubmit={submit.onSubmit}
      onInput={submit.onInput}
      aria-busy={submit.sending}
      className="mt-5 grid gap-x-[1.5rem] gap-y-4 sm:grid-cols-2 lg:mt-[2.15rem] lg:gap-y-[1.66rem]"
    >
      <Field name="name" label={fields.name} icon={icons.name} autoComplete="name" />
      <Field name="email" type="email" label={fields.email} icon={icons.email} autoComplete="email" />
      <Field name="phone" type="tel" label={fields.phone} icon={icons.phone} autoComplete="tel" />
      <DateField name="date" label={fields.date} icon={icons.date} />
      <SelectField name="eventType" placeholder={fields.eventType} icon={icons.eventType} options={eventOptions} />
      <label className="relative block sm:col-span-2">
        <Icon name={icons.message} className={`${iconClass} top-4 lg:top-[1.4rem]`} strokeWidth={1.7} />
        <textarea
          name="message"
          required
          rows={5}
          placeholder={fields.message}
          aria-label={fields.message}
          className={`${base} h-40 resize-none pt-4 lg:h-[12.5rem] lg:pt-[1.55rem]`}
        />
      </label>
      {submit.showMessage ? (
        <FormSuccess
          name={submit.name}
          title={data.successTitle}
          message={data.success}
          leaving={submit.status === "leaving"}
          visibleFor={submit.visibleFor}
          onClose={submit.dismiss}
          closeLabel={data.closeLabel}
          className="sm:col-span-2 lg:mt-[0.4rem]"
        />
      ) : (
        <button
          type="submit"
          disabled={submit.sending}
          className={`${buttonClass} h-14 gap-3 rounded-[0.75rem] !from-[var(--color-gold-submit)] !to-[var(--color-gold-submit)] font-heading text-[1.4rem] font-bold disabled:cursor-wait disabled:opacity-80 sm:col-span-2 lg:mt-[0.4rem] lg:h-[5.88rem] lg:gap-[1.4rem] lg:rounded-[0.9rem] lg:text-[2.85rem]`}
        >
          {submit.sending ? (
            <>
              <Spinner className="size-6" />
              {data.sending}
            </>
          ) : (
            <>
              {data.button}
              <Icon name="LuArrowRight" className={`${buttonArrow} size-7 lg:size-[2.6rem]`} strokeWidth={2.2} />
            </>
          )}
        </button>
      )}
    </form>
  );
};
