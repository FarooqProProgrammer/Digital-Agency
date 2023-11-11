export default function Header() {
    const header = document.createElement('header');
    header.innerHTML = ` 
        <header class="w-full py-4 shadow-md shadow-gray-200 flex justify-between items-center px-2">
            <h4 class="text-3xl font-bold">
                SocialIo
            </h4>
            <ul class="lg:flex md:flex justify-center items-center gap-2 sm:hidden"> 
                <li class="">
                    <a href="#home">Home</a>
                <li>
                <li class="">
                    <a href="#home">About</a>
                <li>
                <li class="">
                    <a href="#home">Services</a>
                <li>

                <li class="">
                    <a href="#home">Contact</a>
                <li>
            </ul>
            <div class="icon">
            <i class="fa-solid fa-bars"></i>
            </div>
        </header>
    
    `;
    return header;
}
