<div>
<div className="flex flex-wrap justify-around">{repos.map(item => (
  <div className="rounded-md border-solid border-2 border-gray-500 shadow-2xl w-1/5 m-5 text-center" key={item.id}>
    <div className="flex flex-col items-center overflow-hidden overflow-ellipsis">
        <div className="p-1 ">
          {item.name}
        </div>

        <div className="p-1">
          {item.language}
        </div>

        <div className="">
          <a className="text-[50px]" href={item.html_url}><DiGithubFull/></a>
        </div>
    </div>
  </div>
))}</div>
</div>