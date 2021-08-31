import * as React from "react";
import { Button, Card, Input, Modal, Typography } from "antd";
import { EditOutlined } from '@ant-design/icons';

import useLocalStorage from "../../../hooks/useLocalstorage";

const { Title } = Typography;

// TODO - Use Antd Form
const Widget: React.FunctionComponent = () => {
    const [goal, setGoal] = useLocalStorage<string>('goalOfTheDay-goal', '');
    const [isCreateModalVisible, setIsCreateModalVisible] = React.useState<boolean>(false);
    const [isEditModalVisible, setIsEditModalVisible] = React.useState<boolean>(false);
    const [tempGoal, setTempGoal] = React.useState<string>('');
    const [tempEditGoal, setTempEditGoal] = React.useState<string>(goal);

    const handleCreateGoal = () => {
        setIsCreateModalVisible(true)
    }

    const handleEditGoal = () => {
        setIsEditModalVisible(true)
    }

    const handleOk = (modalType: 'create' | 'edit') => {
        setGoal(modalType === 'create' ? tempGoal : tempEditGoal)
        if (modalType === 'create') {
            setIsCreateModalVisible(false);
        } else {
            setIsEditModalVisible(false)
        }
    }

    const handleCancel = (modalType: 'create' | 'edit') => {
        setTempGoal('');
        if (modalType === 'create') {
            setIsCreateModalVisible(false);
        } else {
            setIsEditModalVisible(false)
        }
    }

    const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempGoal(e.target.value);
    }

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempEditGoal(e.target.value);
    }

    return (
        <Card extra={goal && <Button icon={<EditOutlined />} onClick={handleEditGoal} type="link" />} title="Goal of The Day">
            {goal && <Title level={3}>{goal}</Title>}
            {!goal && <Button disabled={isCreateModalVisible} onClick={handleCreateGoal} style={{ display: 'flex', margin: '0 auto' }} type="primary">Create Goal</Button>}
            <Modal
                onCancel={() => handleCancel('create')}
                onOk={() => handleOk('create')}
                title="Create Goal"
                visible={isCreateModalVisible}>
                <Input addonBefore="Goal Title" onChange={handleGoalChange} value={tempGoal} />
            </Modal>
            <Modal
                onCancel={() => handleCancel('edit')}
                onOk={() => handleOk('edit')}
                title="Edit Goal"
                visible={isEditModalVisible}>
                <Input addonBefore="Goal Title" onChange={handleEditChange} value={tempEditGoal} />
            </Modal>            
        </Card>
    );
};

export default Widget;
