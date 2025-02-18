// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const CartOrderTile = ({ cart, removeItem, incrementQuantity, decrementQuantity }) => {
    return (
        <div className="relative px-6">
            <button
                className="absolute size-6 top-[-8px] left-4 bg-red-500 rounded-full flex justify-center items-center"
                onClick={() => removeItem(cart.product._id)}
            >
                {/* <CloseRoundedIcon fontSize="small" sx={{ color: "white" }} /> */}
                x
            </button>
            <div className="grid grid-cols-4 gap-2 items-center place-items-end text-[16px]">
                <div className="flex items-center gap-2 place-self-start">
                    <img className="size-16 object-cover rounded-[4px]" src={cart.image} alt={cart.product.name} />
                    <div className="font-[500]">{cart.product.name}</div>
                </div>
                <div>${Number(cart.price).toFixed(2)}</div>
                <div className="border flex gap-2 items-center p-1">
                    <button
                        className="bg-green-400 rounded-[4px] p-1"
                        onClick={() => incrementQuantity(cart.product._id)}
                    >
                        {/* <AddRoundedIcon sx={{ color: "white" }} /> */}
                        +
                    </button>
                    <span>{cart.quantity}</span>
                    <button
                        className="bg-red-500 rounded-[4px] p-1"
                        onClick={() => decrementQuantity(cart.product._id)}
                    >
                        {/* <RemoveRoundedIcon sx={{ color: "white" }} /> */}
                        x
                    </button>
                </div>
                <div>${cart.sub_total.toFixed(2)}</div>
            </div>
            <hr className="mt-4 h-0.5 bg-black/30" />
        </div>
    );
};

export default CartOrderTile;
