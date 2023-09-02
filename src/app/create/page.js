"use client"
  import { useRouter } from "next/navigation";
export default  function Create(){
  const router = useRouter();
    return (
    <form onSubmit={async (e)=>{ //async붙여야 await가능
      e.preventDefault(); //onSubmit이 실행되었을때 기본적인 동작(새로고침)을 막음
      const title = e.target.title.value;
      const body = e.target.body.value;
      const option = {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({title,body})
      }
      fetch(`http://localhost:9999/topics/`,option)
      .then((res)=> res.json())
      .then(result =>{
        console.log(result);
        const lastid = result.id;
        router.push(`read/${lastid}`);
      }
        )
    }}>
      <p>
        <input type="text" name="title" placeholder="제목을 입력하시오"/>
      </p>
      <p>
        <textarea name="body" placeholder="내용을 입력하시오"/>
      </p>
      <input type="submit" value="create"/>
    </form>
    )
  }