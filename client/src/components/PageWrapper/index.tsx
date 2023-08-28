import Groups from "./Groups"
import Search from "./Search"
import Tags from "./Tags"

const PageWrapper = ({ children }: React.PropsWithChildren ) => {
    return (
      <div className="container">
      <div className="row">
        { children }
          {/* <!-- Side widgets--> */}
          <div className="col-lg-4">
              {/* <!-- Search widget--> */}
              <div className="card mb-4">
                  <div className="card-header">Search</div>
                  <div className="card-body">
                    <Search />
                  </div>
              </div>
              {/* <!-- Groups widget--> */}
              <div className="card mb-4">
                  <div className="card-header">Groups</div>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-sm-12">
                              <Groups />
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- Side widget--> */}
              <Tags />
          </div>
      </div>
  </div>
    )
}
  
export default PageWrapper
  