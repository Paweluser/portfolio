import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  });

  const [successMsgVisible, setSuccessMsgVisible] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 500));
    reset();
    setSuccessMsgVisible(true);
    setTimeout(() => setSuccessMsgVisible(false), 3000);
  };

  const fieldClass = (hasError?: boolean) =>
    `mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring bg-[var(--second-color)]
     ${hasError ? "border-red-500" : "border-gray-300"}`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-xl space-y-4 px-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--second-color)]"
        >
          Name:
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name || undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
          className={fieldClass(!!errors.name)}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--second-color)]"
        >
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email || undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className={fieldClass(!!errors.email)}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--second-color)]"
        >
          Message:
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
          className={fieldClass(!!errors.message)}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1 text-sm text-red-600"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[var(--main-color)] text-[var(--second-color)] border-[var(--second-color)] border-[1px] px-4 py-2 rounded-md text-sm font-medium duration-300 transition-colors hover:bg-[var(--accent-color)] hover:text-[var(--main-color)]"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      {successMsgVisible && (
        <p className="text-sm text-green-500">
          Message sent successfully (demo mode).
        </p>
      )}
    </form>
  );
}
