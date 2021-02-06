<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VideoJsController extends Controller
{
    public function index()
    {
        return view('videojs');
    }
}
