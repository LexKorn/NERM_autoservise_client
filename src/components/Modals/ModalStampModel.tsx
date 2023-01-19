import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal, Button, Form} from 'react-bootstrap';

// import {createStamp, deleteStamp, fetchStamps} from '../../http/stampAPI';
// import { fetchAuthors } from '../../http/authorAPI';
import { ADD_AUTO_ROUTE } from '../../utils/consts';
import { IAuto, IStamp, IModel } from '../../types/types';

interface ModalStampModelProps {
    show: boolean;
    onHide: () => void;
    item: string;
};


const ModalStampModel: React.FC<ModalStampModelProps> = ({show, onHide, item}) => {
    const [value, setValue] = useState<string>('');
    const [autos, setAutos] = useState<IAuto[]>([]);
    const [items, setItems] = useState<(IStamp | IModel)[]>([]);
    // const [models, setModels] = useState<IModel[]>([]);
    // const [models, setModels] = useState<IModel[]>([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchAutos().then(data => setAutos(data));
    //     fetchStamps().then(data => setStamps(data));
    // }, []);

    const addStamp = () => {
        if (!value.trim()) {
			return alert('Поле обязательно для заполнения');
		}

        // createStamp(value)
        //     .then(() => {
        //         setValue('');
        //         onHide();
        //         navigate(ADD_AUTO_ROUTE);
        //     })
        //     .catch(err => alert(err.response.data.message));       
    };

    const removeStamp = () => {
        if (!value.trim()) {
			return alert('Поле обязательно для заполнения');
		}

        // const stamp: IStamp[] = stamps.filter(stamp => stamp.name == value);
        // if (stamp.length > 0) {
        //     const authorStamp: IAuthor[] = authors.filter(author => author.stampId == stamp[0].id);
        //     if (authorStamp.length > 0) {
        //         return alert('Марку нельзя удалить, пока на неё ссылается автомобиль');
        //     }
        // }                

        // deleteStamp(value).then(() => {
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
                    Выберите действие с {item === 'stamp' ? 'маркой' : 'моделью'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        // @ts-ignore
                        onKeyPress={e => keyPress(e)}
                        placeholder={item === 'stamp' ? 'Введите название марки' : 'Введите название модели'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addStamp}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={removeStamp}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalStampModel;