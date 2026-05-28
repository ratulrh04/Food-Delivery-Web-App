import CustomerHeader from "./_components/CustomerHeader";
import RestuarantFooter from "./_components/RestuarentFooter";

export default function Home() {
  return (
    <main>
      <CustomerHeader />
      
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>

        <div className="input-wrapper">
          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
          />

          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurant"
          />
        </div>
      </div>

      <RestuarantFooter />
    </main>
  );
}