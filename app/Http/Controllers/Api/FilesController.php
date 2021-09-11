<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use App\Http\Requests\FilesRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;

class FilesController extends Controller {
    public function store(FilesRequest $request) {
        $project = Project::findOrFail($request->project_id);
        $this->authorize('upload',$project);
        $image = $request->file('image');
        $name = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('/public', $name);
        $project->image = $name;
        $project->save();
        $project->tasks;

        // return $project;
        return new ProjectResource($project);
    }
}
