import { writable } from 'svelte/store';


function create_object_array_store(refetcher_callback) {
	const { subscribe, set, update } = writable([])

	return {
		subscribe,
		add: (new_obj_arr) => update(obj_arr => [...obj_arr, ...new_obj_arr]),
		delete_all: () => set([]),
    refetch: () => update(obj_arr => refetcher_callback(obj_arr)),
	}
}


const blogs = create_object_array_store(blogs => {
  // fetch new blogs from API and add them
  // return blogs
})

const gallery = create_object_array_store(medias => {
  // fetch new blogs from API and add them
  // return media
})

export {
  blogs,
  gallery,
}


// temporary sample data
blogs.add(
  [
    { 
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: 'Me in Red',
      date: '1/1/2000',
      image: '/img/me_red.jpg',
      id: '0'
    },
    {
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: 'Me, I and the Sea',
      date: '1/2/2000',
      image: '/img/me.jpg',
      id: '1'
    },
    {
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: 'A Very Long Title That Goes On For Multiple Lines',
      date: '1/2/2000',
      image: '/img/potato.png',
      id: '2'
    },
  ]
)

gallery.add([
  {
    src: "/img/potato.png",
    type: 'image',
  },
  {
    src: "/img/me.jpg",
    type: 'image',
  },
  {
    src: "/img/me_red.jpg",
    type: 'image',
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    type: 'image',
  },
])
