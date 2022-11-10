const NavigationSidebar2 = (active) => {

    if (active === 'home') {
        return (`


        <div>
            <ul class="list-group">


                <li class="list-group-item">
                    <div class="row">
                    <div class="col-2">
                        <i class="fa-brands fa-twitter"></i>
                    </div>

                </div>
                </li>
                <li class="list-group-item active">
                    <div class="row">
                    <div class="col-2">
                    <i class="fa-solid fa-house-chimney "></i>
                    </div>
                    <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                    <a href="./index.html" class="text-white">Home</a>
                    
                    </div>
                </div>
                </li>
                <li class="list-group-item ">


                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-hashtag"></i>
                        </div>
                        <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                        <a href="../index.html" class="text-white">Explore</a>
                             
                        </div>
                </li>
                <li class="list-group-item">


                        <div class="row">
                            <div class="col-2">
                                <i class="fa-solid fa-bell"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                            <a href="#" class="text-white">Notifications</a>
                                
                        </div>
                </li>
                <li class="list-group-item">


                        <div class="row">
                            <div class="col-2">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                            <a href="#" class="text-white">Messages</a>
                                
                            </div>
                    </li>
                <li class="list-group-item">


                        <div class="row">
                            <div class="col-2">
                                <i class="fa-solid fa-bookmark"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                            <a href="#" class="text-white">Bookmarks</a>
                                
                            </div>
                    </li>
                <li class="list-group-item">


                        <div class="row">
                            <div class="col-2">
                                <i class="fa-solid fa-list"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                            <a href="#" class="text-white">Lists</a>
                                
                            </div>
                    </li>
                <li class="list-group-item">


                        <div class="row">
                            <div class="col-2">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                            <a href="#" class="text-white">Profile</a>
                                
                            </div>
                    </li>
                <li class="list-group-item ">


                        <div class="row">
                            <div class="col-2">
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <div class="col-10 d-xxl-block d-xl-block d-lg-none d-sm-none d-none">
                            <a href="#" class="text-white">More</a>
                                
                            </div>
                    </li>
             </ul>
<!--             <button type="button" class="btn btn-primary w-100 rounded-pill mt-1">Tuit</button>-->

           <div class="d-grid mt-2">
             <a href="#"
                class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
           </div>

        </div>

 `);

    }

}
export default NavigationSidebar2;

