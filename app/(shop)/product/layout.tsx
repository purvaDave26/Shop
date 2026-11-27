

export default function ProductLayout({children}:{children:React.ReactNode})
{
    return(
       <main>
           <div style={{ overflow: 'hidden', width: '100%' }}>
  <style>{`
    @keyframes slideRight {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100vw); }
    }
  `}</style>
  <h2
    style={{
      display: 'inline-block',
      whiteSpace: 'nowrap',
      animation: 'slideRight 12s linear infinite',
    }}
  >
    Free Delivery on the product above 99
  </h2>
</div>
    
            {children}
        </main>
    )
}