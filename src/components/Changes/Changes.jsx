import { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Changes.css';

import { editOrder, removeOrder, moveOrder } from '../../model/model';

import { 
    editOrderNameAction,
    editOrderAuthorAction,
    removeOrderAction,
    moveOrderLeftAction,
    moveOrderRightAction
} from '../../store/actions';


class Order extends PureComponent {

    moveLeft = async () => {
        const moveData = {
            orderId: this.props.orderId,
            orderArrId: this.props.orderArrId
        };
        await moveOrder({
            ...moveData,
            destShelfId: moveData.orderArrId - 1
        });
        this.props.moveOrderLeftDispatch(moveData);
    }

    moveRight = async () => {
        const moveData = {
            orderId: this.props.orderId,
            orderArrId: this.props.orderArrId
        };
        await moveOrder({
            ...moveData,
            destShelfId: moveData.orderArrId + 1
        });
        this.props.moveOrderRightDispatch(moveData);
    }

    onRemove = async () => {
        const ok = window.confirm('Удалить кандидата?');
        if (!ok) {
            return;
        }

        const removeData = {
            orderId: this.props.orderId,
            orderArrId: this.props.orderArrId
        };
        await removeOrder(removeData);
        this.props.removeOrderDispatch(removeData);
    }

    onAuthorEdit = async () => {
        let newAuthor = prompt('изменить возраст');
        if (!newAuthor || !newAuthor.trim()) {
            alert('Попробуйте еще раз');
            return;
        }

        newAuthor = newAuthor.trim();

        const order = this.props.florists[this.props.orderArrId].orders[this.props.orderId];
        const orderEditData = {
            orderId: this.props.orderId,
            orderArrId: this.props.orderArrId,
            newAuthor: newAuthor
        };
        await editOrder({
            ...orderEditData,
            newName: order.name
        });
        this.props.editOrderAuthorDispatch(orderEditData);
    }

    onNameEdit = async () => {
        let newName = prompt('изменить имя кандидата');
        if (!newName || !newName.trim()) {
            alert('Попробуйте еще раз');
            return;
        }
        
        newName = newName.trim();

        const order = this.props.florists[this.props.orderArrId].orders[this.props.orderId];
        const orderEditData = {
            orderId: this.props.orderId,
            orderArrId: this.props.orderArrId,
            newName: newName,
        };
        await editOrder({
            ...orderEditData,
            newAuthor: order.author
        });
        this.props.editOrderNameDispatch(orderEditData);
    }

    render() {
        const { orderId, orderArrId } = this.props;
        const order = this.props.florists[orderArrId].orders[orderId];

        return (
            <div className="orderarr-order">
                <div className="orderarr-order-description">
                <div className="orderarr-order-name">
                    { order.name }
                </div>
                <div className="orderarr-order-author">
                    { order.author }
                </div>
                </div>
                
                <div className="orderarr-order-controls">
                <div className="orderarr-order-controls-row">
                    <div className="orderarr-order-controls-icon left-arrow-icon" onClick={this.moveLeft}></div>
                    <div className="orderarr-order-controls-icon right-arrow-icon" onClick={this.moveRight}></div>
                </div>
                <div className="orderarr-order-controls-row">
                    <div className="orderarr-order-controls-icon delete-icon" onClick={this.onRemove}></div>
                </div>
                <div className="orderarr-order-controls-row">
                    <div className="orderarr-order-controls-icon editcust-icon" onClick={this.onAuthorEdit}></div>
                    <div className="orderarr-order-controls-icon editdesc-icon" onClick={this.onNameEdit}></div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ florists }) => ({ florists });

const mapDispatchToProps = dispatch => ({
    editOrderNameDispatch: ({ orderId, orderArrId, newName }) => dispatch(editOrderNameAction({ orderId, orderArrId, newName })),
    editOrderAuthorDispatch: ({ orderId, orderArrId, newAuthor }) => dispatch(editOrderAuthorAction({ orderId, orderArrId, newAuthor })),
    removeOrderDispatch: ({ orderId, orderArrId }) => dispatch(removeOrderAction({ orderId, orderArrId })),
    moveOrderLeftDispatch: ({ orderId, orderArrId }) => dispatch(moveOrderLeftAction({ orderId, orderArrId })),
    moveOrderRightDispatch: ({ orderId, orderArrId }) => dispatch(moveOrderRightAction({ orderId, orderArrId })),
});
  
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order);
