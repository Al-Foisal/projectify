<?php

namespace App\Http\Resources;

use App\Http\Resources\TaskResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request) {
        return [
            'id'          => $this->id,
            'name'        => $this->name,
            'image'       => $this->image_path,
            'tasks'       => TaskResource::collection($this->whenLoaded('tasks')),
            'tasks_count' => $this->when(!is_null($this->tasks_count), $this->tasks_count),
            'created_at'  => $this->created_at,
            'updated_at'  => $this->updated_at,
        ];
    }

    //to sent additional data
    public function with($request) {
        return [
            'status' => 'ok',
        ];
    }
}
