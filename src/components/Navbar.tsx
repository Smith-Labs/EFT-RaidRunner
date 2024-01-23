import imageURL from '../assets/RaidRunner.png'


const Navbar = () => {

    return (
        
        <div role="navigation" className="flex fixed bg-img bg-top bg-cover z-50 border-b-2 w-lvw px-6">
            <div className="flex items-center justify-between">
                <img src={imageURL} width={60} />
                <div>
                    <h3>EFT RAID-RUNNER</h3>
                </div>
            </div>
        </div>
    );
};

export default Navbar;