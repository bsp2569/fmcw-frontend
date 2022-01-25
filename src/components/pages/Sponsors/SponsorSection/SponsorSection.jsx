/* eslint-disable react/react-in-jsx-scope */
import Card from './Card';
import classes from './SponsorSection.module.css';

function SponsorSection(props) {
  return (
    // <div style={{ backgroundColor: "#bbb", display: "flex", flexWrap: "wrap", marginLeft: "3vw" }}>
    <div>
      {/* <h1>Sponsor 1</h1> */}
      <div className={classes.sponsor_title} id="sponsor_1">
        <div className={classes.cards}>
          <Card img="/LAPCARE_LOGO.jpg" name="Lapcare" sponsor="Powered-by Sponsor" />
        </div>
      </div>
      <div className={classes.sponsor_title} id="sponsor_2">
        <div className={classes.cards}>
          <Card
            img="/GIOTTUS_LOGO.png"
            name="Giottus Technologies"
            sponsor="Crypto Trading Partner"
          />
        </div>
      </div>

      <div className={classes.sponsor_title} id="sponsor_3">
        <div className={classes.cards}>
          <Card
            img="/Billionbooks-Official-Logo_(1).svg"
            name="Billionbooks"
            sponsor="Book Reading Partner"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
