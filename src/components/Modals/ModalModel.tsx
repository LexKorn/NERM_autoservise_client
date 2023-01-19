import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal, Button, Form} from 'react-bootstrap';

// import {createModel, deleteModel, fetchModels} from '../../http/modelAPI';
// import { fetchAuthors } from '../../http/authorAPI';
import { ADD_AUTO_ROUTE } from '../../utils/consts';
import { IAuto, IModel } from '../../types/types';

interface ModalModelProps {
    show: boolean;
    onHide: () => void;
};


const ModalModel: React.FC<ModalModelProps> = ({show, onHide}) => {
    const [value, setValue] = useState<string>('');
    const [autos, setAutos] = useState<IAuto[]>([]);
    const [models, setModels] = useState<IModel[]>([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchAutos().then(data => setAutos(data));
    //     fetchModels().then(data => setModels(data));
    // }, []);

    const addModel = () => {
        if (!value.trim()) {
			return alert('Поле обязательно для заполнения');
		}

        // createModel(value)
        //     .then(() => {
        //         setValue('');
        //         onHide();
        //         navigate(ADD_AUTO_ROUTE);
        //     })
        //     .catch(err => alert(err.response.data.message));       
    };

    const removeModel = () => {
        if (!value.trim()) {
			return alert('Поле обязательно для заполнения');
		}

        // const model: IModel[] = models.filter(model => model.name == value);
        // if (model.length > 0) {
        //     const authorModel: IAuthor[] = authors.filter(author => author.modelId == model[0].id);
        //     if (authorModel.length > 0) {
        //         return alert('Марку нельзя удалить, пока на неё ссылается автомобиль');
        //     }
        // }                

        // deleteModel(value).then(() => {
        //     setValue('');
        //     onHide();
        //     navigate(ADD_AUTO_ROUTE);
        // });
    };

    const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            // @ts-ignore 
            size="md"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Выберите действие с моделью
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        // @ts-ignore
                        onKeyPress={e => keyPress(e)}
                        placeholder={"Введите название модели"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addModel}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={removeModel}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalModel;