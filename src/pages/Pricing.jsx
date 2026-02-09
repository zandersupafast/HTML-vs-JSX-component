// Pricing.jsx — A PAGE COMPONENT
// Pages live in the "pages" folder and represent entire screens in the app.
// This page assembles PricingCard components and passes data to them.
// In Next.js, each file in the "pages" or "app" folder automatically becomes a route (URL).

// Import the PricingCard component from the components folder
import PricingCard from '../components/PricingCard/PricingCard';
import './Pricing.css';

function Pricing() {
    // DATA — each object holds all the content for one pricing card
    // Changing this data automatically updates what the cards display
    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };

    return (
        // <> is a React Fragment — groups elements without adding extra HTML divs
        <>
            <p className="page-label"><strong>React App</strong> — running with Vite</p>
            <div className="cards-container">
                {/* The spread operator {...hobbyPlan} passes all object properties as individual props */}
                {/* This is the same as: title="Hobby" price="Free" includesText="Includes:" etc. */}
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
            </div>
        </>
    );
}

export default Pricing;
