import React, { useState } from "react";
import { Form } from "react-bootstrap";

const EditNewsForm = ({ onSubmitEditNews }) => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	return (
		<div>
			<Form onSubmit={() => onSubmitEditNews(title, text)}>
				<Form.Control
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Title"
					as="textarea"
				/>
				<Form.Control
					type="textarea"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Body"
					as="textarea"
				/>
				<Form.Control type="submit" value="Submit" />
			</Form>
		</div>
	);
};

export default EditNewsForm;
