// PricingCard.jsx — A REUSABLE PRICING CARD COMPONENT
// This component demonstrates "composition" — it uses the Button component inside it.
// It accepts these props:
//   - title: the plan name (e.g. "Hobby", "Pro")
//   - priceAmount: the price text (e.g. "Free", "$20")
//   - pricePeriod: optional period (e.g. "/mo." or null)
//   - includesText: the label above the features list
//   - features: an array of feature strings to display as a list
//   - buttonText: the label for the button
//   - buttonVariant: passed through to the Button component ("primary" or "secondary")

// "import" pulls in the Button component from its folder
// This is how components connect to each other in a real project
import Button from '../Button/Button';
import './PricingCard.css';

function PricingCard({ title, priceAmount, pricePeriod, includesText, features, buttonText, buttonVariant }) {
    return (
        <div className="card">
            <div className="card-top">
                <h3 className="card-title">{title}</h3>
                <p className="card-price">
                    <span className="card-price-amount">{priceAmount}</span>
                    {pricePeriod != null && <span className="card-price-period">{pricePeriod}</span>}
                </p>
                <div className="card-content">
                    <p className="includes-text">{includesText}</p>
                    <ul className="features-list">
                        {features.map((feature, i) => (
                            <li key={i}>
                                <span className="checkmark">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Button label={buttonText} variant={buttonVariant} />
        </div>
    );
}

export default PricingCard;
