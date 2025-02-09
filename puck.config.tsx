import type { Config } from "@measured/puck";

type FormField = {
  label: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
};

type FormProps = {
  input: FormField[];
};

type Props = {
  HeadingBlock: { title: string };
  Form: FormProps;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Form: {
      fields: {
        input: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            type: {
              type: "select",
              options: [
                { label: "Textbox", value: "textbox" },
                { label: "Radio Button", value: "radio" },
                { label: "Checkbox", value: "checkbox" },
                { label: "Dropdown", value: "dropdown" },
                { label: "Textarea", value: "textarea" },
                { label: "Date Picker", value: "date" },
                { label: "File Upload", value: "file" },
                { label: "Password", value: "password" },
                { label: "Email", value: "email" },
                { label: "Number", value: "number" },
                { label: "Telephone", value: "tel" },
                { label: "URL", value: "url" },
              ],
            },
            defaultValue: { type: "text" },
            placeholder: { type: "text" },
          },
        },
      },
      defaultProps: {
        input: [],
      },
      render: ({ input }) => (
        <form style={{ padding: 64 }}>
          {input.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              {field.type === "textbox" && (
                <input
                  type="text"
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "password" && (
                <input
                  type="password"
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "email" && (
                <input
                  type="email"
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "number" && (
                <input
                  type="number"
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "tel" && (
                <input
                  type="tel"
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "url" && (
                <input
                  type="url"
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "radio" && (
                <input type="radio" defaultValue={field.defaultValue} />
              )}
              {field.type === "checkbox" && (
                <input type="checkbox" defaultValue={field.defaultValue} />
              )}
              {field.type === "dropdown" && (
                <select defaultValue={field.defaultValue} />
              )}
              {field.type === "textarea" && (
                <textarea
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                />
              )}
              {field.type === "date" && (
                <input type="date" defaultValue={field.defaultValue} />
              )}
              {field.type === "file" && (
                <input type="file" defaultValue={field.defaultValue} />
              )}
            </div>
          ))}
        </form>
      ),
    },
  },
};

export default config;
