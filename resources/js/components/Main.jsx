function Main() {
  return (
    <>
      <div className="content">
        <img className='cover' src={require('../img/cover-img.jpg')} alt="cover" />
        <div className="flex-blocks">
          <div className="block1">
            <h3>what you can sell</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minus maxime numquam molestiae, iusto exercitationem sequi. At soluta eius hic.</p>
          </div>
          <div className="block2">
            <h3>our special offers for you</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus quae autem eveniet recusandae. In.</p></div>
          <div className="block3">
            <h3>cantact your seller</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat! Mollitia est consectetur voluptatem reiciendis totam earum?</p></div>
        </div>
      </div>
      <div className="text">
        <h2>Lorem ipsum <a href="http://localhost:8001/second"> <bold>SECOND</bold></a> consectetur adipisicing elit. <a href="#">Facere</a>, velit!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe ut et, esse cum voluptatum architecto quibusdam maiores consequatur aut dolore commodi ex reiciendis natus qui possimus recusandae error quas modi quia, nisi suscipit voluptatem totam alias? Repudiandae eos tempore qui debitis facilis laudantium reiciendis porro molestias, culpa atque nam.</p>
      </div>
    </>
  )
}

export default Main;