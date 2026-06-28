export default function Home() {
  return (
    <main style={{maxWidth:"800px",margin:"0 auto",padding:"40px 20px"}}>
      <h1 style={{fontSize:"2.5rem",fontWeight:900,marginBottom:"16px"}}>a cafe website name Alex cafe</h1>
      <p style={{color:"#666",fontSize:"1.1rem",marginBottom:"32px"}}>Built by Heaven AI Engine</p>
      <div style={{background:"#f5f5f5",borderRadius:"12px",padding:"24px"}}>
        <h2 style={{marginBottom:"12px"}}>Features</h2>
        <ul style={{paddingLeft:"20px",lineHeight:2}}><li>User authentication</li><li>Core UI</li><li>API endpoints</li><li>Database</li></ul>
      </div>
    </main>
  );
}