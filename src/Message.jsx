import React, { useState } from "react";

const Message = ({ hideMessage }) => {
  const [displayMessage, setDisplayMessage] = useState("Ready kana?");
  const [showButtons, setShowButtons] = useState(true);
  const [displayLetter, setDisplayLetter] = useState("none");
  const [displayPromts, setDisplayPromts] = useState("");

  const handleYesClick = () => {
    setShowButtons(false);
    setDisplayMessage("Kamusta ka na?");
    setTimeout(() => {
      setDisplayMessage("Sobra kitang na miss alam mo ba yun?");
      setTimeout(() => {
        setDisplayMessage("May inihanda akong letter sayo");
        setTimeout(() => {
          setDisplayMessage("Thank you ha");
          setTimeout(() => {
            setDisplayMessage("Para sayo to");
            setTimeout(() => {
              // Simulating displaying a letter after a delay
              setDisplayLetter("");
              setDisplayPromts("none");
            }, 5000); // Adjust the timing as needed
          }, 5000); // Adjust the timing as needed
        }, 5000); // Adjust the timing as needed
      }, 5000); // Adjust the timing as needed
    }, 5000); // Adjust the timing as needed
  };

  const handleNotYetClick = () => {
    setShowButtons(false);
    setDisplayMessage("You're free to come back whenever you're ready!");
  };

  return (
    <main style={{ display: hideMessage }}>
      <div>
        <p style={{ color: "white", display: displayPromts }}>
          {displayMessage}
        </p>
        {showButtons && (
          <div className="button">
            <button onClick={handleYesClick}>Yes</button>
            <button onClick={handleNotYetClick}>Not yet</button>
          </div>
        )}
        <p style={{ display: displayLetter }} className="parag">
          Hello <span>Bernadette!</span>
          <br />
          Bugnutin, sakitin, uhmmm, bastaa.
          <br />
          Habang binabasa mo ito, hindi ko talaga alam kung anong petsa na.
          <br />
          Pero ang mahalaga, nabasa mo ito, 'di ba?
          <br />
          So, ano na?
          <br />
          Kamusta ka na niyan?
          <br />
          Hindi mo 'ata nirereplyan ang huling text ko sayo, haa, hmmmmph!
          <br />
          Choss, hindi ko talaga sinabi na ako 'yun, baka i-block moko dun e,
          HAHAHAHA!
          <br />
          Alam mo ba, sampung beses ko ata 'yun pinag-isipan.
          <br />
          Wala e, gusto lang kita ma-mustaa.
          <br />
          Ayun, luckily sumagot ka.
          <br />
          Sabi mo okay ka lang, pero may duda ako e, bakit?
          <br />
          <br />
          So ayun na nga, kamusta na yung dati kong <span>babiii</span> ha?
          (Dumuwal ka pa oh!)
          <br />
          Pagaling ha?
          <br />
          Mahabang proseso, pero kung aalagaan mo sarili mo, darating ka dun.
          <br />
          Kaya wag masyado ausuhin sarili.
          <br />
          Kapag pagod, magpahinga ka lang ganun.
          <br />
          Iwasan magpapatuyo ng pawis, iwasan maka-lanhap ng alikabok.
          <br />
          Lagi kang mag-pray ha?
          <br />
          Wag panghinaan, mahina lang katawan mo pero malakas ka kay God.
          <br />
          <br />
          Sa panahon na sinulat ko ito, day 88 na since then.
          <br />
          And still, HAHAHAHA!
          <br />
          Cheee!
          <br />
          Lagi ko pa rin nga pala suot yung black ponytail mo.
          <br />
          Kapag nawawala, di ako mapakali.
          <br />
          Ito na lang kasi meron ako na galing sayo.
          <br />
          Feel ko, happy ka naman na, kung happy ka na, edi wala naman akong
          problema dun.
          <br />
          Mas masaya ka, mas masaya rin ako para sa'yo.
          <br />
          Hindi ko hinihiling na i-unblock moko, hindi na rin ako umaasa na alam
          mo na, pero bastaa, HAHAHAH!
          <br />
          <br />
          Di ko masabi, may hiling lang ako sayo, wag mo sana ako ichat para
          lang patigilin nako.
          <br />
          Di naman ako nang-gugulo e, hayaan mo nalang ako na ganito.
          <br />
          Sa ganito ako masaya e, hihi.
          <br />
          Wala akong balita sayo, kaya sana, hanggang maari iwasan mong bunutin
          buhok mo.
          <br />
          Madalas ka magkapasa kaya ingat-ingat din.
          <br />
          Madalas ka din mag-lagnat, alagaan mo sarili mo, para sakin, para kila
          tita, para sa future husband mo at sa future anak mo, si Clau?
          Bridgette?
          <br />
          Tuparin mo mga pangarap mo ha!
          <br />
          Isa na kong naka-support sayo.
          <br />
          Yung barcode mo, bilang ko 'yan.
          <br />
          Kapag 'yan talaga sinabi ko sayo.
          <br />
          Kahit anong mangyari, wag mong gagawin yung pag-sisisihan at hindi
          tama, okay?
          <br />
          Kahit anong problema 'yan, hindi solusyon 'yan.
          <br />
          <br />
          Salamat nang marami sa pagbabasa ng liham na ito, hindi naman ganun
          karami, gusto lang kitang makausap kahit sa ganitong paraan lang.
          <br />
          Salamat sa lahat, Nankeen.
          <br />
          I'll cherish you forever.
          <br />
          Ingat ka palagi.
          <br />
          <span>
            <cite>Je t'aime mon amour.</cite>
          </span>
        </p>
      </div>
    </main>
  );
};

export default Message;
