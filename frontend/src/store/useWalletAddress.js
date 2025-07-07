import {create} from "zustand"
const useWalletAddress=create((set) =>(
    {
        walletAddress:"",
        setWalletAddress: (address) =>({walletAddress:address}),
    }
));
export default useWalletAddress;