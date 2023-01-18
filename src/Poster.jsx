function Poster () {
        return (
            <>
                <img 
                    src={this.props.url} 
                    alt={this.props.alt}
                />
            </>
        )
}

export default Poster