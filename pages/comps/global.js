const Global = (props) => {
    return (
        <div className="page-layout">
            {props.children}
    <style jsx global>{`
                  html, body, #__next, .page-layout {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                  }
    `}</style>
        </div>
    )
}

export default Global;