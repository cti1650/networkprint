const LinkPanel = ({ url, title, description }) => {
  return (
    <a
      href={url}
      class="font-bold block flex flex-col justify-items-center items-center rounded-lg shadow m-2 text-white bg-[#00838d] hover:opacity-90 active:opacity-70"
      title={description}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div class="flex-none w-full text-xs whitespace-pre-wrap h-1/3 flex justify-center items-center text-center">
        <div>{description}</div>
      </div>
      <div class="grow w-full bg-white text-black flex justify-center items-center text-center">
        <div>{title}</div>
      </div>
    </a>
  );
};
