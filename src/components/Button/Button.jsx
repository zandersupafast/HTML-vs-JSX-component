// Button.jsx — A REUSABLE BUTTON COMPONENT
// This component can be used anywhere in the app by importing it.
// It accepts two props:
//   - label: the text displayed on the button (e.g. "Download", "Get Pro")
//   - variant: controls the style — "secondary" (default, light) or "primary" (dark)

import './Button.css';    // Each component imports its own styles

function Button({ label, variant = "secondary" }) {
    return (
        // Template literal (``) builds the className dynamically
        // If variant is "primary", this becomes: className="download-button primary"
        // If variant is "secondary", this becomes: className="download-button secondary"
        <button className={`download-button ${variant}`}>{label}</button>
    );
}

// This makes Button available to other components via:
// import Button from '../Button/Button'
export default Button;
