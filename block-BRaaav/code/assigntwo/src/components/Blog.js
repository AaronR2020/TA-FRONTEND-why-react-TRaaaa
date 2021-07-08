function Blog(props){
    return(
        <section class="blog padding">
        <div class="container">
          <header class="sec-header text-center">
            <h2 class="heading">Our Blog</h2>
            <div class="dot-wrapper">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </header>
          <div class="flex wrap">
            <Article img='assets/media/blog-image1.jpg' info='How to find beautiful workspace?' pVal='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
            <Article img='assets/media/blog-image2.jpg' info='Woman sportwear' pVal='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
            <Article img='assets/media/blog-image3.jpg' info='New creative fashion' pVal='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
            <Article img='assets/media/blog-image4.jpg' info='Minimalist design trend in 2018' pVal='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'/>
          </div>
        </div>
      </section>
    )
}

function Article(props){
    return(
        <article class="flex article flex-48">
        <div class="flex-40 font-0">
          <img
            class="flexible-img"
            src={props.img}
          />
        </div>

        <div class="flex-60 article-content">
          <time datetime="">
            <i class="far fa-clock"></i>
            December 22, 2017
          </time>
          <h3>{props.info}</h3>
          <p>{props.pVal}</p>
          <a class="btn btn-tertiary" href="#">Read Article</a>
        </div>
      </article>

    )
}

export default Blog
