

const ContactCard = ({ id, name, phone, email, address, onDelete, onEdit }) => {
  
  
  
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://i.pinimg.com/736x/2d/5c/4d/2d5c4d9d2e9cb07708b059956880f9b0.jpg" className="img-fluid rounded-circle" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{name}</h5>
                      <div>
                        <i className="fa-solid fa-pencil mx-2" onClick={onEdit}></i>
                        <i className="fa-solid fa-trash mx-2" onClick={onDelete}></i>
                      </div>
                    </div>
                    <p className="card-text address text-secondary"><i className="fa-solid fa-location-dot"></i> {address}</p>
                    <p className="card-text phone text-secondary"><i className="fa-solid fa-phone"></i> {phone}</p>
                    <p className="card-text email text-secondary"><i className="fa-solid fa-envelope"></i> {email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
