---
title: "Playing around with IncludeOS"
date: "2020-03-13"
---

I recently stumbled across IncludeOS, a cool project that allows developers to
embed a tiny operating system into their applications, allowing them to be run
without any interaction with a classic operating system like Linux or Windows.

<!-- end -->

This is exciting as it allows the application to be run with the absolute bare
minimum dependencies, ensuring a lightweight distributable image. According to
the creators, applications can be booted in tens of milliseconds, and have a low
memory footprint. This puts this project in the same arena as AWS Lambda and
other Function as a Service (FaaS) providers.

It takes a little bit of setting up, but I found my experience was made a fair
bit easier with [Multipass from Ubuntu](https://multipass.run/). Using this
tool, I created a light Ubuntu VM on my Mac and set up all of the dependencies
within it.

```bash{promptUser: tom}{promptHost: multipass}
apt-get install python3-pip python3-dev git cmake clang-6.0 gcc nasm make qemu
pip3 install setuptools wheel conan psutil jsonschema
conan config install https://github.com/includeos/conan_config.git
```

I could then build the hello world example, and boot it using QEMU. Remember,
this is an entire operating system spinning up here, not just a container (!!):

```bash{promptUser: tom}{promptHost: multipass}
git clone https://github.com/includeos/hello_world.git
mkdir build && cd "$_"
conan install ../hello_world -pr clang-6.0-linux-x86_64
source activate.sh
cmake ..
cmake --build .
boot hello
```

When I booted the application, the console was filled with a whole heap of
stuff, but importantly:

```
[...]
 IncludeOS 0.15.1-5 (x86_64 / 64-bit)
 +--> Running [ Hello world - OS included ]
[...]
```

How cool is that? I downloaded and installed the dependencies, and within five
minutes I had my own operating system running locally. The team at IncludeOS
have also written a really neat tutorial on how to get the net-enabled examples
running on Google Compute Engine.
[Check it out here](https://www.includeos.org/blog/2017/includeos-on-google-compute-engine.html).

When I was playing, I tried to use my newly compiled (and GRUB-loaded) images on
DigitalOcean through their Custom Image functionality. Even though I managed to
get the image converted to a VMDK (VirtualBox disk image), and could get a
Droplet to launch, I could not get the IP to respond with the application. More
digging required I think!

I will be following the development of this project closely. It would be super
cool to try and write a toy FaaS platform based around this technology! :)
