import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  Link,
  StaticGenerateHandler,
  routeLoader$,
} from "@builder.io/qwik-city";

import Image from "~/media/ynm-app-on-ipad.jpg?jsx";
import JuryImage from "~/media/ynm-app-jury-on-ipad.jpg?jsx";
import ImgSenatsverwaltung from "~/media/senatsverwaltung.svg?jsx";

import { email, type Input, minLength, object, string } from "valibot";
import {
  type InitialValues,
  type SubmitHandler,
  useForm,
  valiForm$,
} from "@modular-forms/qwik";

const ContactSchema = object({
  name: string([minLength(1, $localize`Please enter your name.`)]),
  email: string([
    minLength(1, $localize`Please enter your email.`),
    email($localize`The email address is badly formatted.`),
  ]),
  message: string(),
});

type ContactForm = Input<typeof ContactSchema>;

export const useFormLoader = routeLoader$<InitialValues<ContactForm>>(() => ({
  name: "",
  email: "",
  message: "",
}));

// export const useFormAction = formAction$<ContactForm>((values) => {
//   // Runs on server
//   sendEmail(values);
// }, valiForm$(ContactSchema));

export const sendEmail = $((values: ContactForm) => {
  window.location.href =
    "mailto:mail@ynm.studio?subject=YesNoMaybeApp Request by " +
    values.name +
    " (" +
    values.email +
    ")" +
    "&body=" +
    values.message;
});

export default component$(() => {
  const [, { Form, Field }] = useForm<ContactForm>({
    loader: useFormLoader(),
    //  action: useFormAction(),
    validate: valiForm$(ContactSchema),
  });

  const handleSubmit = $<SubmitHandler<ContactForm>>((values) => {
    console.log(values);
    sendEmail(values);
  });

  const showContent = useSignal<boolean>(false);
  useVisibleTask$(() => {
    showContent.value = true;
  });

  return (
    <div class="flex min-h-screen flex-col">
      <div class="relative flex min-h-screen flex-col overflow-clip bg-black">
        <Image
          class={[
            "absolute inset-0 h-full w-full object-cover opacity-40  transition duration-1000 ease-in-out",
            showContent.value ? "scale-100" : "scale-105",
          ]}
        />
        <div class="absolute inset-0  bg-gradient-to-b from-black/50 to-transparent"></div>
        <header class="relative flex flex-wrap items-baseline gap-2  px-4 py-4 text-white lg:flex-nowrap lg:items-center lg:px-6">
          <Link
            class="flex flex-col items-start justify-center font-mono lg:flex-row"
            href=""
          >
            <span>[Yes]</span>
            <span>[No]</span>
            <span>[Maybe].App</span>
          </Link>
          <nav class="ml-auto flex flex-col items-end gap-x-4 sm:gap-x-6 lg:flex-row lg:items-center">
            <span class="flex items-center gap-x-4 sm:gap-x-6">
              <a
                class="py-1 text-sm underline-offset-4 hover:underline"
                href="#features"
              >
                {$localize`Features`}
              </a>
              <a
                class="py-1 text-sm underline-offset-4 hover:underline"
                href="#usecase"
              >
                {$localize`For Artists`}
              </a>
              <a
                class="py-1 text-sm underline-offset-4 hover:underline"
                href="#usecase"
              >
                {$localize`For Jury`}
              </a>
              <a
                class="py-1 text-sm underline-offset-4 hover:underline"
                href="#contact"
              >
                {$localize`Contact`}
              </a>
            </span>
            <div class="ml-4 flex gap-2">
              <a class="text-sm  underline-offset-4 hover:underline" href="/en">
                EN
              </a>
              <span class="text-sm">/</span>
              <a class="text-sm  underline-offset-4 hover:underline" href="/de">
                DE
              </a>
            </div>
          </nav>
        </header>
        <section
          class={[
            "flex w-full flex-auto items-center py-12 text-white transition delay-300 duration-700 ease-in-out",
            showContent.value
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0",
          ]}
        >
          <div class="container relative mx-auto px-4 md:px-6">
            <div class="flex max-w-6xl flex-col  items-center space-y-24">
              <div class="w-full space-y-2 text-balance">
                <h1 class="flex w-full flex-col justify-between text-4xl font-medium tracking-tighter  md:text-6xl lg:text-7xl/none xl:text-8xl">
                  <div class="self-start whitespace-pre">{$localize`From application\nto Jury voting.`}</div>
                  <div class="self-end whitespace-pre">
                    {$localize`Digitally and easily\nmanage art awards.`}
                  </div>
                </h1>
              </div>
              <div class="flex w-full flex-col items-baseline gap-4 space-x-4 text-white/80 lg:flex-row">
                <p class="max-w-prose text-balance md:text-xl">
                  {$localize`Effortlessly manage complex, multimedia portfolios, encourage collaborative discussions among jury members with an elegant, integrated chat feature, and ensure impartial and transparent art evaluations.`}
                </p>
                <a
                  class="inline-flex  items-center justify-center rounded-full border border-current px-6 py-3 font-medium text-white/80 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#contact"
                >
                  {$localize`Request a Demo`}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main class="flex-1">
        <section
          id="features"
          class="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div class="container mx-auto px-4 md:px-6">
            <div class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <JuryImage class="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />

              <div class="flex flex-col justify-center space-y-4">
                <div class="space-y-2">
                  <div class="inline-block rounded-lg border border-current bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800">
                    Features
                  </div>
                  <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {$localize`Simplify Your Art Prize Process`}
                  </h2>
                  <p class="max-w-2xl text-pretty text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {$localize`From application to voting, our tool makes the art prize
                    process seamless and efficient.`}
                  </p>
                </div>
                <div class="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    class="inline-flex  items-center justify-center rounded-full bg-gray-900 px-6 py-3 font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="https://www.kultur-b-digital.de/en/digitale-kultur/data-management-and-infrastructure/clear-anonymous-and-fair-a-digital-tool-for-jury-proceeding/"
                    target="_blank"
                  >
                    {$localize`Learn more`}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="usecase" class="w-full py-12 md:py-24 lg:py-32">
          <div class="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div class="space-y-3">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {$localize`For Artists and Jury Members`}
              </h2>
              <p class="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {$localize`Our tool is designed to cater to the needs of both artists and
                jury members, making the art prize process fair and efficient.`}
              </p>
            </div>
          </div>
        </section>
        <section
          id="walkthrough"
          class="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {$localize`Walkthrough Video`}
                </h2>
                <p class="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  {$localize`Watch our detailed walkthrough video to understand how to use
                  our tool effectively.`}
                </p>
              </div>
              <div class="w-full max-w-2xl">
                <iframe
                  class="mx-auto aspect-video h-auto w-full overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/izJ1rc2MF9E?si=_FKc81vCDJozWYlS"
                  title="Walkthrough Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" class="w-full border-t py-12 md:py-24 lg:py-32">
          <div class="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div class="space-y-3">
              <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {$localize`Contact Us`}
              </h2>
              <p class="mx-auto max-w-2xl text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {$localize`Interested? We are happy to provide you with a non-binding offer
                for the setup and integration of the app. Get in touch with us.`}
              </p>
            </div>
            <div class="mx-auto w-full max-w-sm space-y-2">
              <Form class="flex flex-col space-y-2" onSubmit$={handleSubmit}>
                <Field name="name">
                  {(field, props) => (
                    <>
                      <input
                        {...props}
                        type="text"
                        class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full max-w-lg flex-1 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={$localize`Your Name` + "*"}
                        value={field.value}
                      />
                      {field.error && (
                        <div class="text-xs text-red-500">{field.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <Field name="email">
                  {(field, props) => (
                    <>
                      <input
                        {...props}
                        type="email"
                        class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full max-w-lg flex-1 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={$localize`Your Email` + "*"}
                        value={field.value}
                      />
                      {field.error && (
                        <div class="text-xs text-red-500">{field.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <Field name="message">
                  {(field, props) => (
                    <textarea
                      {...props}
                      class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full max-w-lg flex-1 rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder={$localize`Your Message`}
                      value={field.value}
                    />
                  )}
                </Field>

                <button
                  class="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-full  bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                >
                  {$localize`Inquire now!`}
                </button>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <footer class="flex w-full shrink-0 flex-col items-center gap-12 border-t px-4 py-6 md:px-6 lg:flex-row lg:gap-6">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://ynm.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yil & Mann
          </a>
          . All rights reserved.
        </p>
        <nav class="flex flex-col items-center gap-4 sm:ml-auto sm:gap-12 lg:flex-row ">
          <div class="flex items-center gap-2 text-xs">
            {$localize`Supported by:`}
            <ImgSenatsverwaltung class="h-8 w-auto" />
          </div>
          <a
            class="text-xs underline-offset-4 hover:underline"
            target="_blank"
            href="https://www.ynm.studio/de/impressum/"
          >
            {$localize`Imprint`}
          </a>
        </nav>
      </footer>
    </div>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  // example of loading params for this use case
  // every implementation will be different
  const locales = ["en", "de", ""];

  return {
    params: locales.map((locale) => {
      return { locale };
    }),
  };
};
