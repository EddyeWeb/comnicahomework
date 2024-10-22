import logo from './images/logo.png';
import illustration from './images/illustration.svg';
import Button from './components/Button';

function App() {
  return (
    <div className="min-h-screen bg-[#CDEBE5]">
      <div className="grid-container flex flex-col md:flex-row">
        <div className="p-4 flex flex-col">
          <a href="/">
            <img src={logo} alt="Logo" className="w-24 h-auto mb-4 self-start" />
          </a>
          <div className="flex flex-col lg:flex-row items-center justify-center flex-grow">
            <div>
              <h1>Comnica Signature</h1>
              <p>Digitális aláíró szolgáltatás a Comnicától</p>
            </div>
            <div className="lg:ml-4 lg:mt-0 mt-4">
              <img src={illustration} alt="Illustration" className="illustration" />
            </div>
          </div>
        </div>

        <div className="p-12 flex items-center justify-center flex-grow bg-white bg-opacity-40">
          <div className="text-left w-1/2 min-w-96">
            <h2>Üdvözlöm a Comnica Signature-ben!</h2>
            <p className="mb-10">
              A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
              A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor
              kezdje el, ha készen áll rá.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
