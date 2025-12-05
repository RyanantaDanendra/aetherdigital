import Image from "next/image";
import HistoryImage from "../../../public/Assets/Lily.jpg";

export function History() {
  return (
    <div className="history-container w-full h-screen">
      <div className="history-texts flex justify-between h-32 items-end px-32">
        <h1 className="text-5xl font-bold">
          AETHER <br />
          DIGITAL.
        </h1>
        <p className="text-md text-end ps-72">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          mollitia quo obcaecati quisquam sequi itaque. Amet sequi, quaerat
          consectetur nostrum ipsum facere ea ducimus autem aliquam suscipit ut,
          nemo quo!
        </p>
      </div>
      <div className="history-image flex justify-center mt-12">
        <div className="image-wrapper w-[74rem] h-[20rem]">
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
