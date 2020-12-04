@extends('layouts.app')

@section('content')

<link href="//vjs.zencdn.net/7.8.2/video-js.min.css" rel="stylesheet">

<div class="container">
    {{-- <div class="my-5">
        <video-js></video-js>
    </div>

    <div class="my-5">
        <my-video></my-video>
    </div> --}}
    <div class="my-5">
        <vue-plyr></vue-plyr>
    </div>

</div>


@endsection
