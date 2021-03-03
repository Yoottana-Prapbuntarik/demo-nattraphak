const LoadingPage = () => {
  return (
    <div>
      <style jsx global>
        {`
      body {
      overflow:hidden;
      }

        .container-loading {
          display: flex;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          max-height: 100%;
          overflow: hidden;
          background-color: rgba(0, 0, 0, .5);
          z-index: 9000;
        }
        .spinner-border-container {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }

        .text-icon-load{
          color: #ff00ff !important;
        }
        
      `}
      </style>
      <div className="container-loading">
        <div className="spinner-border-container">
          <div className="position-fixed text-white">
            Loading...
            </div>
          <div className="spinner-border spinner-grow-lg text-icon-load" style={{ width: '8rem', height: '8rem' }}>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
