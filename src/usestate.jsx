
      {/*} <p>{n}</p>
      <button onClick ={() =>{ console.log("increased :" ,n);
      nset(n+1)}} className="px-7 py-5 bg-red rounded-lg">Click  </button>
            <button onClick ={() =>{ console.log("decreased :" ,n);
      nset(n-1)}} className="px-7 py-5 bg-red rounded-lg">Click </button>
      <p>{s ? "Karthick" : "KKaviya"}</p>
      <button onClick ={() => {sset(!s) }} className="px-7 py-5 bg-red rounded-lg">Toggle {st}</button>
       <p>{z ? "Karthick" : "Kaviya"}</p>
      <button onClick ={() => {zset(!z) }} className="px-7 py-5 bg-red rounded-lg">Toggle {z}</button>}
              const [n,nset]=useState(0);
             const [s,sset]=useState(true);
             const st="karthick";
             const [z,zset]=useState("kaviya");}
             const [data, setc] = useState({
              name: "",
              message: ""
             }); 
             
             
             
             
             
             
             
             
             
             
             
             
             
             
               const [user,setuser]=useState({name:"",email:""});
               const [array,setarray]=useState([]);
             
             
             
             
               return (
               <>
               <input type="text"
             placeholder='name' name='name' value={user.name} onChange={(e) => {setuser({...user,name:e.target.value})}}/>
              <input type="email"
             placeholder='email' name='email' value={user.email} onChange={(e) => {setuser({...user,email:e.target.value})}}/>
             <h3>{JSON.stringify(user)}</h3>
             <button onClick={() => {setarray([...array,user]); setuser({name:"",email:""})}}>Add user</button>
             <h3>{JSON.stringify(array)}</h3>
               </>)
             */}