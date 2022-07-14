const Info = () => {
  return (
    <div className="flex justify-center font-pokemon my-16">
      <div className="w-[50rem] text-center">
        <h1 className="text-2xl font-bold mb-10">Info</h1>
        <div className="flex justify-center mb-10">
          <img src="/src/assets/ghost.png" alt="" className="max-w-fit"/>
        </div>
        <p className="font-bold mb-5">APP DESARROLLADA POR:</p>
        <p className="mb-10 font-bold">EDUARDO HIRAM RUBIO FLORES</p>
        <p className="font-bold mb-5">MATRICULA</p>
        <p className="mb-10">191223</p>
        <p className="font-bold mb-5">GRADO Y GRUPO</p>
        <p className="font-bold">9-A</p>
      </div>
    </div>
  );
};

export default Info;
