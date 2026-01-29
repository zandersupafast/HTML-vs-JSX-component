// App.jsx — THE ROOT COMPONENT
// This is the top of the component tree — every other component lives inside it.
// In a larger app, this is where you'd add routing (showing different pages based on the URL).
// For now, it simply renders the Pricing page.

import Pricing from './pages/Pricing';

function App() {
    return <Pricing />;
}

// "export default" makes this component available to other files
// index.jsx imports it with: import App from './App'
export default App;
