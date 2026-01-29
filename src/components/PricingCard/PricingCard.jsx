// PricingCard.jsx — A REUSABLE PRICING CARD COMPONENT
// This component demonstrates "composition" — it uses the Button component inside it.
// It accepts these props:
//   - title: the plan name (e.g. "Hobby", "Pro")
//   - price: the price text (e.g. "Free", "$20/mo.")
//   - includesText: the label above the features list
//   - features: an array of feature strings to display as a list
//   - buttonText: the label for the button
//   - buttonVariant: passed through to the Button component ("primary" or "secondary")

// "import" pulls in the Button component from its folder
// This is how components connect to each other in a real project
import Button from '../Button/Button';
import './PricingCard.css';

function PricingCard({ title, price, includesText, features, buttonText, buttonVariant }) {
    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-price">{price}</p>
            <div className="card-content">
                <p className="includes-text">{includesText}</p>
                <ul className="features-list">
                    {/* .map() loops through the features array and creates a <li> for each one */}
                    {features.map((feature, i) => (
                        <li key={i}>
                            <span className="checkmark">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Using our Button component — passing the label and variant as props */}
            <Button label={buttonText} variant={buttonVariant} />
        </div>
    );
}

export default PricingCard;
