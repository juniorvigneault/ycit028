import "./App.css";
import { useImmer } from "use-immer";
import * as EmailValidator from "email-validator";
import { passwordStrength } from "check-password-strength";

function App() {
  const [formData, setFormData] = useImmer({
    email: "",
    password: "",
    confirmPassword: "",
    emailError: false,
    passwordError: false,
    passwordStrength: {
      color: "",
      text: "",
    },
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((draft) => {
      draft[name] = value;
    });
  };

  const handleTogglePassword = () => {
    setFormData((draft) => {
      draft.showPassword = !draft.showPassword;
    });
  };

  const validate =
    formData.email &&
    formData.password &&
    !formData.emailError &&
    !formData.passwordError &&
    formData.passwordStrength.text === "Strong";

  return (
    <div id="app" className="container">
      <form id="my-form" className="shadow">
        <h4>Form Validator</h4>

        <div className="mb-4">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => {
              if (!EmailValidator.validate(formData.email)) {
                setFormData((draft) => {
                  draft.emailError = true;
                });
              }
            }}
          />
          {formData.emailError && (
            <p className="validator-err">
              The email has to be a valid email address.
            </p>
          )}
        </div>
        <div className="mb-4">
          <label>Password</label>
          <div style={{ display: "flex" }}>
            <input
              className="form-control"
              type={formData.showPassword ? "text" : "password"}
              data-rules="required|string|min:5"
              style={{ width: "500%", marginRight: "10px" }}
              name="password"
              value={formData.password}
              onChange={(e) => {
                handleInputChange(e);
                if (formData.password.length >= 8) {
                  const passwordStrengthResult = passwordStrength(
                    e.target.value
                  ).value;
                  setFormData((draft) => {
                    draft.passwordStrength.text = passwordStrengthResult;
                    if (passwordStrengthResult === "Strong") {
                      draft.passwordStrength.color = "green";
                      draft.validated = true;
                    } else {
                      draft.passwordStrength.color = "red";
                    }
                  });
                }
              }}
              onBlur={() => {
                if (formData.password.length < 8) {
                  setFormData((draft) => {
                    draft.passwordError = true;
                  });
                }
              }}
            />
            {formData.password && (
              <button
                type="button"
                onClick={handleTogglePassword}
                className="show"
              >
                {formData.showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>
          {formData.passwordError && (
            <p className="validator-err">
              The password must be at least 8 characters.
            </p>
          )}
        </div>

        {!formData.showPassword && (
          <div className="mb-4">
            <label>Confirm Password</label>
            <div style={{ display: "flex" }}>
              <input
                className="form-control"
                type="password"
                data-rules="required|string|min:5"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={{ width: "500%", marginRight: "10px" }}
              />
              {formData.confirmPassword && (
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="show"
                >
                  {formData.showPassword ? "Hide" : "Show"}
                </button>
              )}
            </div>
          </div>
        )}

        {formData.passwordStrength.text && (
          <div className="mb-4">
            <label>Password Strength :</label>
            <p style={{ color: formData.passwordStrength.color }}>
              {formData.passwordStrength.text}
            </p>
          </div>
        )}

        <button
          disabled={!validate}
          style={{
            backgroundColor: !validate ? "grey" : "#0f633c",
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default App;
