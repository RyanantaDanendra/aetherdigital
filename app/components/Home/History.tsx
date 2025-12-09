import Image from "next/image";
import HistoryImage from "../../../public/Assets/Lily.jpg";

export function History() {
  return (
    <div className="history-container w-full lg:h-screen h-full overflow-hidden mt-32 lg:mt-32">
      <div className="history-texts flex justify-between h-32 items-end lg:px-32">
        <h1 className="lg:text-5xl md:text-4xl text-xl font-bold md:ms-10 lg:ms-0">
          AETHER <br />
          DIGITAL.
        </h1>
        <p className="lg:text-lg md:text-[1rem] text-xs text-end lg:ps-72 md:ps-32 md:me-10 lg:me-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          mollitia quo obcaecati quisquam sequi itaque. Amet sequi, quaerat
          consectetur nostrum ipsum facere ea ducimus autem aliquam suscipit ut,
          nemo quo!
        </p>
      </div>
      <div className="history-image flex justify-center mt-12">
        <div className="image-wrapper lg:w-[64rem] lg:h-[20rem] w-96 h-56 md:w-[40rem] md:h-[20rem]">
          <Image
            src={HistoryImage}
            alt="History Image"
            width={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
