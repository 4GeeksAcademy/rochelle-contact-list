import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});
	//console.log(useContext(Context));

	const { store, actions } = useContext(Context);

	//call contact to initialize page
	useEffect(() => {
		actions.getContacts();
	}, []);

	//console.log(store.contacts);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.length > 0
							? store.contacts.map(item => (
									<ContactCard
										key={item.id}
										name={item.full_name}
										address={item.address}
										phone={item.phone}
										email={item.email}
										id={item.id}
										onDelete={() => setState({ showModal: true, id: item.id })}
									/>
							  ))
							: "Cargando"}

						{/*<ContactCard onDelete={() => setState({ showModal: true })} />
							<ContactCard />
						<ContactCard />
						<ContactCard /> */}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};