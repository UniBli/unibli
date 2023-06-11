import React from "react";
import "./styles/FooterPage.css"
import logoUniBli from "../../assets/img/logoUniBli+Texto_F-Negativo.svg"

const FooterPage = () => {
  return (
    <>
      <section id="footer">
        <div className="logoUniBli">
          <img
            src={logoUniBli}
            className="d-inline-block align-top"
            alt="Logo UniBli"
          />
          <small>Todos os direitos reservados a ©UniBli</small>
        </div>

        <small>Feito com <span role="img" aria-label="Coração verde">💚</span> por, Thyago, Weslley e Hélio</small>
        <small>Orientador  Rodrigo Bossini</small>

      </section>
    </>
  );
};

export default FooterPage;