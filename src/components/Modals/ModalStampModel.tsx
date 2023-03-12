import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal, Button, Form} from 'react-bootstrap';

import { createStamp, deleteStamp, fetchStamps } from '../../http/stampsAPI';
import { createModel, deleteModel, fetchModels } from '../../http/modelsAPI';
import { createMaster, deleteMaster, fetchMasters } from '../../http/mastersAPI';
import { fetchAutos } from '../../http/autosAPI';
import { ADD_AUTO_ROUTE } from '../../utils/consts';
import { IAuto, IStamp, IModel } from '../../types/types';

interface ModalStampModelProps {
    show: boolean;
    onHide: () => void;
    item: string;
};


const ModalStampModel: React.FC<ModalStampModelProps> = ({show, onHide, item}) => {
    const [value, setValue] = useState<string>('');
    // const [autos, setAutos] = useState<IAuto[]>([]);
    // const [items, setItems] = useState<(IStamp | IModel)[]>([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetchAutos().then(data => setAutos(data));
    //     fetchStamps().then(data => setStamps(data));
    // }, []);

    const addStamp = () => {
        if (!value.trim()) {
			return alert('Поле обязательно для заполнения');
		}

        if (item === "stamp") {
            createStamp(value)
                .then(() => {
                    setValue('');
                    onHide();
                    navigate(ADD_AUTO_ROUTE);
                })
                .catch(err => alert(err.response.data.message));
        } else if (item === "model") {
            createModel(value)
                .then(() => {
                    setValue('');
                    onHide();
                    navigate(ADD_AUTO_ROUTE);
                })
                .catch(err => alert(err.response.data.message));  
        } else if (item === "master") {
            createMaster(value)
                .then(() => {
                    setValue('');
                    onHide();
                })
                .catch(err => alert(err.response.data.message));  
        }
    };

    const removeStamp = () => {
        if (!value.trim()) {
			return alert('Поле обязательно для заполнения');
		}

        // const stamp: IStamp[] = stamps.filter(stamp => stamp.name == value);
        // if (stamp.length) {
        //     const authorStamp: IAuthor[] = authors.filter(author => author.stampId == stamp[0].id);
        //     if (authorStamp.length) {
        //         return alert('Марку нельзя удалить, пока на неё ссылается автомобиль');
        //     }
        // }                

        if (item === "stamp") {
            deleteStamp(value).then(() => {
                setValue('');
                onHide();
                navigate(ADD_AUTO_ROUTE);
            });
        } else if (item === "model") {
            deleteModel(value).then(() => {
                setValue('');
                onHide();
                navigate(ADD_AUTO_ROUTE);
            });
        } else if (item === "master") {
            deleteMaster(value).then(() => {
                setValue('');
                onHide();
            });
        }
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
                    Выберите действие с {item === 'stamp' ? 'маркой' : item === 'model' ? 'моделью' : 'мастером'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        // @ts-ignore
                        onKeyPress={e => keyPress(e)}
                        placeholder={item === 'stamp' ? 'Введите название марки' : item === 'model' ? 'Введите название модели' : 'Введите мастера'}
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