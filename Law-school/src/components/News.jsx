export const News = (props) => {
  return (
    <div id='news' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>News</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 faculty'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='news-img' />
                    <div className='caption'>
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
